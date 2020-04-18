package com.usjt.PI2020.service;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import com.usjt.PI2020.model.Celular;
import com.usjt.PI2020.model.Usuario;
import com.usjt.PI2020.repository.JPAUtil;

public class UsuarioService {
	
	public int insereUsuario(Map<String, String> parameters) {

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

		try {
			manager.persist(user);
		} catch (Exception e) {
			manager.close();
			return 0;
		}

		transaction.commit();
		return 1;

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

		try {
			transaction.commit();
		} catch (Exception e) {
			System.out.println("login existente");
		}

	}

	public void atualizaLocalizacao(Long id, Map<String, String> parameters) {

		EntityManager manager = JPAUtil.getEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();

		Usuario user = manager.find(Usuario.class, id);
		user.setLocalizacao(parameters.get("localizacao"));
		user.setRoteadorBssid(parameters.get("roteador"));
		transaction.commit();

	}

	public Usuario login(Map<String, String> params) {

		EntityManager manager = JPAUtil.getEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();

		String login = params.get("login");
		String senha = params.get("senha");

		Usuario usuario = new Usuario();

		Query query = manager.createQuery("from Usuario");
		List<Usuario> results = query.getResultList();

		for (Usuario user : results) {
			if (user.getLogin().equals(login) && user.getSenha().equals(senha)) {
				usuario = user;
			}
		}

		return usuario;

	}
}
