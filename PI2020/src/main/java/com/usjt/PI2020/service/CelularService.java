package com.usjt.PI2020.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.usjt.PI2020.model.Usuario;
import com.usjt.PI2020.repository.UsuarioRepository;

public class CelularService {
	
	@Autowired
	private UsuarioRepository usuarioRepo;
	
	public int atualizaCelular(Long id, Map<String, String> novoNumero) {

		Usuario user = usuarioRepo.getOne(id);

		user.getCelular().setNumero(Long.parseLong(novoNumero.get("numeroNovo")));

		try {
		usuarioRepo.save(user);
		}catch(Exception e) {
			System.out.println("Celular ja existente");
			return 0;
		}
		
		return 1;
	}

	public int insereAmigo(long userId, Map<String, String> params) {

		long numero = Long.parseLong(params.get("numeroAmigo"));
		//long id = Long.parseLong(params.get("id"));
		
		Usuario amigo = new Usuario();
		Usuario usuario = usuarioRepo.getOne(userId);

		List<Usuario> results = usuarioRepo.findAll();
		
		for(Usuario user : results) {
			if(user.getCelular().getNumero() == numero) {
				amigo = user;
			}
		}

		if(usuario.getId() == amigo.getId()) {
			System.out.println("Não pode adicionar voce mesmo");
			return 0;
		}else if(usuario.getAmigos().contains(amigo)) {
			System.out.println("Amigo já adicionado");
			return 2;
		}else if(amigo.getNome() == null) {
			System.out.println("Amigo não existe");
			return 3;
		}
		usuario.getAmigos().add(amigo);
		amigo.getAmigos().add(usuario);
		
		usuarioRepo.save(usuario);
		return 1;
	}
}
