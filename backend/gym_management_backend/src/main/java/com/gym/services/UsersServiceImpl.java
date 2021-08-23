package com.gym.services;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gym.daos.MemberDao;
import com.gym.daos.UserDao;
import com.gym.entities.Members;
import com.gym.entities.Users;
import com.gym.exceptions.UserNotFoundException;

@Transactional
@Service
public class UsersServiceImpl implements UsersService {
	@Autowired
	private UserDao userDao;
	@Autowired
	private MemberDao memberDao;
	@Override
	public Users findByUemail(String email) {
		Users user = userDao.findByUemail(email);
		return user;
	}

	@Override
	public Users findByUid(int id) {
		Optional<Users> user = userDao.findById(id);
		return user.orElse(null);
	}

	@Override
	public void save(Users user) {
		userDao.save(user);
		
	}
	@Override
	public void updateResetPasswordToken(String token, String email) throws UserNotFoundException {
		Users user = userDao.findByUemail(email);
        if (user != null) {
        	user.setResetToken(token);
        	userDao.save(user);
        } else {
            throw new UserNotFoundException("Could not find any customer with the email " + email);
        }
    }
	
	
	@Override
	public Users getByResetPasswordToken(String token) {
        return userDao.findByResetToken(token);
    }
     
	
	@Override
    public void updatePassword(Users user, String findByResetToken) {
       // BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        //String encodedPassword = passwordEncoder.encode(newPassword);
        user.setUpassword(findByResetToken);
       Members member = user.getMember();
       member.setMpassword(findByResetToken);
        user.setResetToken(null);
        userDao.save(user);
        memberDao.save(member);
    }
     

}
