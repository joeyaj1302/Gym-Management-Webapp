package com.gym.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gym.dtos.MemberDto;
import com.gym.dtos.PaymentDto;
import com.gym.entities.Enquiry;
import com.gym.entities.Equipments;
import com.gym.entities.Members;
import com.gym.entities.Payments;
import com.gym.entities.Plans;
import com.gym.entities.Trainers;
import com.gym.entities.Users;
import com.gym.models.Response;
import com.gym.services.EnquiryService;
import com.gym.services.EquipmentsService;
import com.gym.services.MembersService;
import com.gym.services.PaymentService;
import com.gym.services.PlansService;
import com.gym.services.TrainerService;
import com.gym.services.UsersService;

@CrossOrigin("*")
@RestController
public class LoginRestController {
	@Autowired
	private UsersService userService;
	@Autowired
	private MembersService memberService;
	@Autowired
	private TrainerService trainerService;
	@Autowired
	private PlansService planService;
	@Autowired
	private EquipmentsService equipmentsService;
	@Autowired
	private PaymentService paymentService;
	@Autowired
	private EnquiryService enquiryService;
	private Users masteruser = new Users();

	@PostMapping("/authenticaterest")
	private ResponseEntity<?> authenticate(@RequestParam(name = "email") String email,
			@RequestParam(name = "password") String password) {
		Users user = userService.findByUemail(email);
		System.out.println(email);
		if (user != null && user.getUpassword().equals(password) && user.getUrole().equals("member")) {
			Members member = user.getMember();
			System.out.println(member.toString());
			int id = member.getMid();
			String url = "http://localhost:3009/account/?id=" + id;
			System.out.println(url);
			user.setStatus(true);
			userService.save(user);
			this.masteruser = user;
			return Response.success(member, url, "Welcome member!!");
		} else if (user != null && user.getUpassword().equals(password) && user.getUrole().equals("trainer")) {
			Trainers trainer = user.getTrainer();
			int id = trainer.gettid();
			System.out.println(trainer.toString());
			String url = "http://localhost:3007/account/?id=" + id;
			user.setStatus(true);
			userService.save(user);
			this.masteruser = user;
			return Response.success(trainer, url, "Welcome trainer!!");
		} else if (user != null && user.getUpassword().equals(password) && user.getUrole().equals("admin")) {
			System.out.println(user.toString());
			int id = user.getUid();
			String url = "http://localhost:3008/dashboard/?id=" + id;
			user.setStatus(true);
			userService.save(user);
			this.masteruser = user;
			return Response.success(user, url, "Welcome admin!!");
		} else {
			return Response.error("Invalid Login Credentials");
		}
	}

	@GetMapping("/logoutadmin")
	private ResponseEntity<?> logoutadmin(@RequestParam(name = "id") String id) {
		int uid = Integer.parseInt(id);
		Users user = userService.findByUid(uid);
		user.setStatus(false);
		userService.save(user);
		this.masteruser = user;
		return null;
	}

	@GetMapping("/logoutmember")
	private ResponseEntity<?> logoutmember(@RequestParam(name = "id") String id) {
		int mid = Integer.parseInt(id);
		Members member = memberService.findByMid(mid);
		Users user = member.getUser();
		user.setStatus(false);
		userService.save(user);
		this.masteruser = user;
		return null;
	}

	@GetMapping("/logouttrainer")
	private ResponseEntity<?> logouttrainer(@RequestParam(name = "id") String id) {
		int tid = Integer.parseInt(id);
		Trainers trainer = trainerService.findByTid(tid);
		Users user = trainer.getUser();
		user.setStatus(false);
		userService.save(user);
		this.masteruser = user;
		return null;
	}

	@GetMapping("/getallmembers")
	private ResponseEntity<?> getallmembers() {
		if (this.masteruser.getStatus()) {
			ArrayList<Members> memberList = new ArrayList<Members>();
			memberList = (ArrayList<Members>) memberService.findAllMembers();
			if (memberList != null) {
				return Response.successList(memberList);
			} else {
				return Response.error("Empty List");
			}
		} else {
			return Response.errorAuth("Login First to access the services!");
		}

	}

	@GetMapping("/getalltrainers")
	private ResponseEntity<?> getallTrainers() {
		if (this.masteruser.getStatus()) {
			List<Trainers> trainerList = new ArrayList<Trainers>();
			trainerList = trainerService.findAllTrainers();
			if (trainerList != null) {
				return Response.successList(trainerList);
			} else {
				return Response.error("Empty List");
			}
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@GetMapping("/getallplans")
	private ResponseEntity<?> getallPlans() {
		
			List<Plans> planList = new ArrayList<Plans>();
			planList = planService.findAllPlans();
			if (planList != null) {
				return Response.successList(planList);
			} else {
				return Response.error("Empty List");
			}
	}

	@GetMapping("/getallequipments")
	private ResponseEntity<?> getallequipments() {
		if (this.masteruser.getStatus()) {
			List<Equipments> eqList = equipmentsService.findAllEquipments();
			if (eqList != null) {
				return Response.successList(eqList);
			}
			return Response.error("Empty Equippment list!!");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}

	}

	@GetMapping("/getallpayments")
	private ResponseEntity<?> getallpayments() {
		if (this.masteruser.getStatus()) {
			List<Payments> planList = paymentService.findAllPayments();
			// Stream<PaymentDto> result = planList.stream().map(payment ->
			// PaymentDto.fromEntity(payment));
			return Response.successList(planList);
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@GetMapping("/getallenquiries")
	private ResponseEntity<?> getallenquiries() {
		if (this.masteruser.getStatus()) {
			List<Enquiry> enquiryList = enquiryService.findAll();
			return Response.successList(enquiryList);
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@GetMapping("/getbymid")
	private ResponseEntity<?> getBymid(@RequestParam(name = "id") String id) {
		if (this.masteruser.getStatus()) {
			int mid = Integer.parseInt(id);
			Members member = memberService.findByMid(mid);
			if (member != null) {
				System.out.println(member.toString());
				return Response.success(member, "member");

			} else {
				return Response.error("Member not found");
			}
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@GetMapping("/getbypid")
	private ResponseEntity<?> getBypid(@RequestParam(name = "id") String id) {
		if (this.masteruser.getStatus()) {
			int pid = Integer.parseInt(id);
			Plans plan = planService.findByPlid(pid);
			if (plan != null) {
				return Response.success(plan, "plan");
			} else {
				return Response.error("plan not found");
			}
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@PostMapping("/addnewuser")
	private ResponseEntity<?> addnewuser(Members member, @RequestParam(name = "pid") String id) {
		if (this.masteruser.getStatus()) {
			int pid = Integer.parseInt(id);
			System.out.println(member.toString());
			Plans plan = planService.findByPlid(pid);
			Users user = member.getUser();
			user.setUfname(member.getMfname());
			user.setUlname(member.getMlname());
			user.setUpassword(member.getMpassword());
			user.setUemail(member.getMemail());
			user.setUrole("member");
			userService.save(user);
			Trainers trainer = plan.getTrainer();
			member.setTrainer(trainer);
			member.setPlan(plan);
			memberService.save(member);
			Payments payment = new Payments();
			payment.setMember(member);
			payment.setPdate(member.getMjoindate());
			payment.setPamount(plan.getPcost());
			payment.setPlan(plan);
			payment.setPstatus(true);
			paymentService.save(payment);
			return Response.success(member, "member");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@PostMapping("/addplan")
	private ResponseEntity<?> addnewplan(Plans plan, @RequestParam(name = "tid") String id) {
		if (this.masteruser.getStatus()) {
			int tid = Integer.parseInt(id);
			Trainers trainer = trainerService.findByTid(tid);
			plan.setTrainer(trainer);
			planService.save(plan);
			return Response.success(plan, "plan");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@PostMapping("/addequipment")
	private ResponseEntity<?> addnewplan(Equipments equipment) {
		if (this.masteruser.getStatus()) {
			equipmentsService.save(equipment);
			return Response.success(equipment, "equipment");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@PostMapping("/addenquiry")
	private ResponseEntity<?> addenquiry(Enquiry enquiry) {
		if (this.masteruser.getStatus()) {
			enquiryService.save(enquiry);
			return Response.success(enquiry, "enquiry");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@PostMapping("/addnewtrainer")
	private ResponseEntity<?> addnewtrainer(Trainers trainer, @RequestParam(name = "pid") String name) {
		if (this.masteruser.getStatus()) {

			// int pid = Integer.parseInt(id);
			System.out.println(trainer.toString());
			Plans plan = planService.findByPname(name);
			List<Plans> planList = new ArrayList<Plans>();
			planList.add(plan);
			Users user = trainer.getUser();
			user.setUfname(trainer.gettfname());
			user.setUlname(trainer.gettlname());
			user.setUpassword(trainer.gettpassword());
			user.setUemail(trainer.gettemail());
			user.setUrole("trainer");
			userService.save(user);
			trainer.setPlanList(planList);

			trainerService.save(trainer);
			return Response.success(trainer, "trainer");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@PostMapping("/findplanbyname")
	private ResponseEntity<?> findplan(@RequestParam(name = "pname") String name) {
		if (this.masteruser.getStatus()) {
			Plans plan = planService.findByPname(name);
			return Response.success(plan, "plan");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@GetMapping("findtotmembersinplan")
	private ResponseEntity<?> findtotmembersinplan() {

		return null;

	}

	@GetMapping("/getbymemail")
	private ResponseEntity<?> getbymemail(@RequestParam(name = "email") String email) {
		if (this.masteruser.getStatus()) {
			Members member = memberService.findByMemail(email);
			if (member != null) {
				return Response.success(member, "member");
			}
			return Response.error("Member not found!");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@PutMapping("/updatebymid")
	private ResponseEntity<?> updatebymid(@RequestParam(name = "id") String id, Members member) {
		if (this.masteruser.getStatus()) {
			int mid = Integer.parseInt(id);
			System.out.println(member.toString());
			memberService.update(member, mid);
			Members member1 = memberService.findByMid(mid);
			Users user = member1.getUser();
			System.out.println(user.toString());
			user.setUfname(member1.getMfname());
			user.setUlname(member.getMlname());
			user.setUpassword(member1.getMpassword());
			user.setUemail(member1.getMemail());
			userService.save(user);
			return Response.success(member1, "member");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}

	}

	@GetMapping("/getbytid")
	private ResponseEntity<?> getBytid(@RequestParam(name = "id") String id) {
		if (this.masteruser.getStatus()) {
			int tid = Integer.parseInt(id);
			Trainers trainer = trainerService.findByTid(tid);
			if (trainer != null) {
				return Response.success(trainer, "trainer");
			} else {
				return Response.error("Trainer not found");
			}
		} else {
			return Response.errorAuth("Login First to access the services!");
		}

	}

	@PutMapping("/updatebytid")
	private ResponseEntity<?> updatebytid(@RequestParam(name = "id") String id, Trainers trainer) {
		if (this.masteruser.getStatus()) {
			int mid = Integer.parseInt(id);
			System.out.println(trainer.toString());
			trainerService.update(trainer, mid);
			Trainers trainer1 = trainerService.findByTid(mid);
			Users user = trainer1.getUser();
			System.out.println(user.toString());
			user.setUfname(trainer1.gettfname());
			user.setUlname(trainer1.gettlname());
			user.setUpassword(trainer1.gettpassword());
			user.setUemail(trainer1.gettemail());
			userService.save(user);
			return Response.success(trainer1, "trainer");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}

	}

	@PutMapping("/updatebypid")
	private ResponseEntity<?> updatebypid(@RequestParam(name = "id") String id, Plans plan) {
		if (this.masteruser.getStatus()) {
			int plid = Integer.parseInt(id);
			System.out.println(plan.toString());
			Plans plan1 = planService.findByPlid(plid);
			planService.update(plan, plid);
			return Response.success(plan1, "plan");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}

	}

	@GetMapping("/getmemberbytid")
	private ResponseEntity<?> getmembersbytid(@RequestParam(name = "id") String id) {
		if (this.masteruser.getStatus()) {
			int tid = Integer.parseInt(id);
			List<Members> memberList = memberService.findByTrainer(tid);
			return Response.successList(memberList);
		} else {
			return Response.errorAuth("Login First to access the services!");
		}

	}

	@GetMapping("/getpaymentsbymid")
	private ResponseEntity<?> getpaymentsbymid(@RequestParam(name = "id") String id) {
		if (this.masteruser.getStatus()) {
			int mid = Integer.parseInt(id);
			List<Payments> paymentList = paymentService.findByMember(mid);
			return Response.successList(paymentList);
		} else {
			return Response.errorAuth("Login First to access the services!");
		}

	}

	@DeleteMapping("/deletebymid")
	private ResponseEntity<?> deletebymid(@RequestParam(name = "id") String id) {
		if (this.masteruser.getStatus()) {
			System.out.println("Hellow");
			int mid = Integer.parseInt(id);
			System.out.println(mid);
			boolean deleted = memberService.deleteById(mid);
			if (deleted) {
				return Response.success("member", "member is deleted");
			} else {
				return Response.error("plan not found");
			}
		} else {
			return Response.errorAuth("Login First to access the services!");
		}

	}

	@DeleteMapping("/deletebypid")
	private ResponseEntity<?> deletebypid(@RequestParam(name = "id") String id) {
		if (this.masteruser.getStatus()) {
			int pid = Integer.parseInt(id);
			boolean deleted = planService.deleteById(pid);
			if (deleted) {
				return Response.success("plan", "plan");
			} else {
				return Response.error("plan not found");
			}
		} else {
			return Response.errorAuth("Login First to access the services!");
		}

	}

	@DeleteMapping("/deletebytid")
	private ResponseEntity<?> deletebytid(@RequestParam(name = "id") String id) {
		if (this.masteruser.getStatus()) {
			int tid = Integer.parseInt(id);
			boolean deleted = trainerService.deleteById(tid);
			if (deleted) {
				return Response.success("trainer", "trainer deleted successfully");
			} else {
				return Response.error("trainer not found");
			}
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@GetMapping("/findsortedmembers")
	private ResponseEntity<?> findsortedmembers() {
		if (this.masteruser.getStatus()) {
			List<Members> sortedMembers = memberService.findAllSortedMembers();
			return Response.successList(sortedMembers);
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@GetMapping("/sortmembersbyjoindate")
	private ResponseEntity<?> sortMembersByJoindate() {
		if (this.masteruser.getStatus()) {
			List<Members> sortedMembers = memberService.sortMembersByJoindate();
			return Response.successList(sortedMembers);
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

	@PostMapping("/trial")
	private ResponseEntity<?> trial(Members member) {
		if (this.masteruser.getStatus()) {
			Members member1 = memberService.findByMemail(member.getMemail());
			MemberDto dto = MemberDto.fromEntity(member1);
			return Response.success(dto, "dto");
		} else {
			return Response.errorAuth("Login First to access the services!");
		}
	}

}
