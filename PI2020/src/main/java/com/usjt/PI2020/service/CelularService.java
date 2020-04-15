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

		transaction.commit();

	}

	public Usuario insereAmigo(Long numeroABuscar) {

		EntityManager manager = JPAUtil.getEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();

		long numero = numeroABuscar;
		
		Usuario usuario = new Usuario();
		
		Query query = manager.createQuery("from Usuario");
		List<Usuario> results = query.getResultList();
		
		for(Usuario user : results) {
			if(user.getCelular().getNumero() == numero) {
				usuario = user;
			}
		}

		
		return usuario;

	}
}
