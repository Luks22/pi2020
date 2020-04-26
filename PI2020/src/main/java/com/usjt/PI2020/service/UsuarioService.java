package com.usjt.PI2020.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usjt.PI2020.model.Celular;
import com.usjt.PI2020.model.Login;
import com.usjt.PI2020.model.Usuario;
import com.usjt.PI2020.repository.LoginRepository;
import com.usjt.PI2020.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepo;
	
	@Autowired
	private LoginRepository loginRepo;
	
	
	public int insereUsuario(Map<String, String> parameters) {

		Usuario user = new Usuario();
		user.setLocalizacao(parameters.get("localizacao"));
		user.setNome(parameters.get("nome"));
		
		Login login = new Login();
		
		login.setLogin(parameters.get("login"));
		login.setSenha(parameters.get("senha"));

		Celular cel = new Celular();
		cel.setIp(parameters.get("ip"));
		cel.setNumero(Long.parseLong(parameters.get("numero")));

		cel.setUsuario(user);
		login.setUsuario(user);
		
		user.setCelular(cel);
		user.setLogin(login);

		try {
			usuarioRepo.save(user);
		} catch (Exception e) {
			System.out.println("Login existente");
			return 0;
		}

		return 1;

	}

	public Usuario getUsuario(Long idUser) {

		Usuario user = usuarioRepo.getOne(idUser);
		
		return user;
	}

	public String deleteAmigo(Long id, String numero) {
		
		Usuario user = usuarioRepo.getOne(id);
		Usuario amigo = new Usuario();
		
		List<Usuario> amigos = user.getAmigos();
		
		for(Usuario u : amigos) {
			if(u.getCelular().getNumero() == Long.parseLong(numero)) {
				amigo = u;
			}
		}
		
		user.getAmigos().remove(amigo);
		usuarioRepo.save(user);
		
		return "amigo deletado";
	}

	public void atualizaUsuario(Long id, Map<String, String> parameters) {

		

		Usuario user = new Usuario();
		user = usuarioRepo.getOne(id);
		
		user.setNome(parameters.get("nome"));
		user.getLogin().setLogin(parameters.get("login"));
		user.getLogin().setSenha(parameters.get("senha"));

		try {
			usuarioRepo.save(user);
		} catch (Exception e) {
			System.out.println("login existente");
		}

	}

	public void atualizaLocalizacao(Long id, Map<String, String> parameters) {


		Usuario user = usuarioRepo.getOne(id);
		user.setLocalizacao(parameters.get("localizacao"));
		user.setRoteadorBssid(parameters.get("roteador"));
		usuarioRepo.save(user);

	}
	
	

	public Usuario login(String username, String password) {

		String login = username;
		String senha = password;
		

		Usuario usuario = new Usuario();

		
		List<Login> results = loginRepo.findAll();

		for (Login log : results) {
			if (log.getLogin().equals(login) && log.getSenha().equals(senha)) {
				usuario = log.getUsuario();
			}
		}

		return usuario;

	}
	
	public List<Usuario> amigos(Long id){
		
		Usuario user = usuarioRepo.getOne(id);
		
		return user.getAmigos();
	}
}
