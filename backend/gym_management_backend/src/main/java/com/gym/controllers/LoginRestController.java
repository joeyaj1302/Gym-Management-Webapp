package com.gym.controllers;

import java.util.ArrayList;
import java.util.List;

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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gym.dtos.MemberDto;
import com.gym.entities.Equipments;
import com.gym.entities.Members;
import com.gym.entities.Plans;
import com.gym.entities.Trainers;
import com.gym.entities.Users;
import com.gym.models.Response;
import com.gym.services.EquipmentsService;
import com.gym.services.MembersService;
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
	
	@PostMapping("/authenticaterest")
	private ResponseEntity<?> authenticate(@RequestParam(name = "email") String email,@RequestParam(name = "password") String password) {
		Users user = userService.findByUemail(email);
		System.out.println(email);
		if (user != null && user.getUpassword().equals(password) && user.getUrole().equals("member")) {
			Members member = user.getMember();
			return Response.success(member,"member");
		}
		else if (user != null && user.getUpassword().equals(password) && user.getUrole().equals("trainer")) {
			Trainers trainer = user.getTrainer();
			return Response.success(trainer,"trainer");
		}
		else if (user != null && user.getUpassword().equals(password) && user.getUrole().equals("admin")) {
			System.out.println("Inside Admin backend");
			return Response.success(user,"admin");
		}
		else {
			return Response.error("Invalid Login Credentials");
		}
	}
	@GetMapping("/getallmembers")
	private ResponseEntity<?> getallmembers() {
		ArrayList<Members> memberList = new ArrayList<Members>();
		memberList = (ArrayList<Members>) memberService.findAllMembers();
		if (memberList != null) {
			return Response.successList(memberList);
		}
		else {
			return Response.error("Empty List");
		}
	}
	
	@GetMapping("/getalltrainers")
	private ResponseEntity<?> getallTrainers() {
		List<Trainers> trainerList = new ArrayList<Trainers>();
		trainerList =  trainerService.findAllTrainers();
		if (trainerList != null) {
			return Response.successList(trainerList);
		}
		else {
			return Response.error("Empty List");
		}
	}
	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping("/getallplans")
	private ResponseEntity<?> getallPlans() {
		List<Plans> planList = new ArrayList<Plans>();
		planList =  planService.findAllPlans();
		if (planList != null) {
			return Response.successList(planList);
		}
		else {
			return Response.error("Empty List");
		}
	}
	
	@GetMapping("/getallequipments")
	private ResponseEntity<?> getallequipments() {
		List<Equipments> eqList = equipmentsService.findAllEquipments();
		if(eqList!=null) {
			return Response.successList(eqList);
		}
		return Response.error("Empty Equippment list!!");
		
	}
	
	@GetMapping("/getbymid")
	private ResponseEntity<?> getBymid(@RequestParam(name = "id") String id) {
		int mid = Integer.parseInt(id);
		Members member = memberService.findByMid(mid);
		if (member != null ) {
			return Response.success(member,"member");
		}
		else {
			return Response.error("Member not found");
		}
	}

	@PostMapping("/addnewuser")
	private ResponseEntity<?> addnewuser(Members member,@RequestParam(name = "pid") String id){
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
		return Response.success(member, "member");
	}
	
	@GetMapping("/getbymemail")
	private ResponseEntity<?> getbymemail(@RequestParam(name = "email") String email) {
		Members member = memberService.findByMemail(email);
		if(member != null) {
			return Response.success(member, "member");
		}
		return Response.error("Member not found!");
	}
	
	@PutMapping("/updatebymid")
	private ResponseEntity<?> updatebymid(@RequestParam(name = "id") String id ,Members member)  {
		int mid = Integer.parseInt(id);
		System.out.println(member.toString());
		memberService.update(member,mid);
		Members member1 = memberService.findByMid(mid);
		Users user = member1.getUser();
		System.out.println(user.toString());
		user.setUfname(member1.getMfname());
		user.setUlname(member.getMlname());
		user.setUpassword(member1.getMpassword());
		user.setUemail(member1.getMemail());
		userService.save(user);
		return Response.success(member1,"member");
		
	}
	@GetMapping("/getbytid")
	private ResponseEntity<?> getBytid(@RequestParam(name = "id") String id) {
		int tid = Integer.parseInt(id);
		Trainers trainer = trainerService.findByTid(tid);
		if (trainer != null ) {
			return Response.success(trainer,"trainer");
		}
		else {
			return Response.error("Trainer not found");
		}
		
	}
	
	@PutMapping("/updatebytid")
	private ResponseEntity<?> updatebytid(@RequestParam(name = "id") String id ,Trainers trainer)  {
		int mid = Integer.parseInt(id);
		System.out.println(trainer.toString());
		trainerService.update(trainer,mid);
		Trainers trainer1 = trainerService.findByTid(mid);
		Users user = trainer1.getUser();
		System.out.println(user.toString());
		user.setUfname(trainer1.gettfname());
		user.setUlname(trainer1.gettlname());
		user.setUpassword(trainer1.gettpassword());
		user.setUemail(trainer1.gettemail());
		userService.save(user);
		return Response.success(trainer1,"trainer");
		
	}
	@GetMapping("/getmemberbytid")
	private ResponseEntity<?> getmembersbytid(@RequestParam(name = "id") String id) {
		int tid = Integer.parseInt(id);
		List<Members> memberList = memberService.findByTrainer(tid);
		return Response.successList(memberList);
		
	}

	//@DeleteMapping("/deletebypid/{id}")
	@RequestMapping(value="/deletebypid", method=RequestMethod.DELETE)
	private ResponseEntity<?> deletebypid(@RequestParam(name = "id") String id) {
		int pid = Integer.parseInt(id);
		boolean deleted = planService.deleteById(pid); 
		if (deleted ) {
			return Response.success("plan","plan");
		}
		else {
			return Response.error("plan not found");
		}
		
	}
	
	
	
}

