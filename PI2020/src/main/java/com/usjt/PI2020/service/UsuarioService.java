package com.usjt.PI2020.service;

import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import com.usjt.PI2020.model.Celular;
import com.usjt.PI2020.model.Usuario;
import com.usjt.PI2020.repository.JPAUtil;

public class UsuarioService {

	public void insereUsuario(Map<String, String> parameters) {

		EntityManager manager = JPAUtil.getEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();

		Usuario user = new Usuario();
		user.setLocalizacao(parameters.get("localizacao"));
		user.setNome(parameters.get("nome"));
		user.setLogin(parameters.get("login"));
		user.setSenha(parameters.get("senha"));

		Celular cel = new Celular();
		cel.setIp(parameters.get("ip"));
		cel.setNumero(Long.parseLong(parameters.get("numero")));
		
		cel.setUsuario(user);
		user.setCelular(cel);

		manager.persist(user);
		transaction.commit();
	}

	public Usuario getUsuario(Long id) {

		EntityManager manager = JPAUtil.getEntityManager();
		Usuario usuario = manager.find(Usuario.class, id);

		return usuario;

	}

	public void deleteUsuario(Long id) {

		EntityManager manager = JPAUtil.getEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		
		Usuario usuario = manager.find(Usuario.class, id);
		
		manager.remove(usuario);
		transaction.commit();
		

	}
	
	public void atualizaUsuario(Long id, Map<String, String> parameters) {

		EntityManager manager = JPAUtil.getEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		
		Usuario user = manager.find(Usuario.class, id);
		
		user.setNome(parameters.get("nome"));
		user.setLogin(parameters.get("login"));
		user.setSenha(parameters.get("senha"));
		
		transaction.commit();
		

	}
	
	
	public void atualizaLocalizacao(Long id, Map<String, String> parameters) {

		EntityManager manager = JPAUtil.getEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		
		Usuario user = manager.find(Usuario.class, id);
		user.setLocalizacao(parameters.get("localizacao"));	
		transaction.commit();
		

	}
}
