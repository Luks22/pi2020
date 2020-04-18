package com.usjt.PI2020.service;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import com.usjt.PI2020.model.Celular;
import com.usjt.PI2020.model.Usuario;
import com.usjt.PI2020.repository.JPAUtil;

public class CelularService {

	public void atualizaCelular(Long id, Map<String, String> novoNumero) {

		EntityManager manager = JPAUtil.getEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();

		Usuario user = manager.find(Usuario.class, id);

		user.getCelular().setNumero(Long.parseLong(novoNumero.get("numeroNovo")));

		try {
		transaction.commit();
		}catch(Exception e) {
			System.out.println("Celular ja existente");
		}
	}

	public void insereAmigo(Long userId, Map<String, String> params) {

		EntityManager manager = JPAUtil.getEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();

		long numero = Long.parseLong(params.get("numeroAmigo"));
		
		Usuario amigo = new Usuario();
		Usuario usuario = manager.find(Usuario.class, userId);
		
		Query query = manager.createQuery("from Usuario");
		List<Usuario> results = query.getResultList();
		
		for(Usuario user : results) {
			if(user.getCelular().getNumero() == numero) {
				amigo = user;
			}
		}

		usuario.getAmigos().add(amigo);
		amigo.getAmigos().add(usuario);
		amigo.getUsuarios().add(usuario);
		usuario.getUsuarios().add(amigo);
		
		manager.persist(usuario);
		manager.persist(amigo);
		transaction.commit();
		
		System.out.println(usuario.getAmigos().get(0));
		

	}
}
