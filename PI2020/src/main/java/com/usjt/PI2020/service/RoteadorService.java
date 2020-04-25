package com.usjt.PI2020.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.usjt.PI2020.model.Roteador;
import com.usjt.PI2020.repository.RoteadorRepository;

public class RoteadorService {

	@Autowired
	private RoteadorRepository roteadorRepo;

	public int insertWifiData(Map<String, String> params) {

		
		String ssid = params.get("ssid");
		String bssid = params.get("bssid");
		boolean contem = false;

		Roteador r = new Roteador();
		List<Roteador> roteadores = roteadorRepo.findAll();

		if (roteadores.size() > 0) {
			for (Roteador roteador : roteadores) {
				if (bssid.equals(roteador.getBssid())) {
					contem = true;
				}
			}
		}

		if (!contem) {
			r.setSsid(ssid);
			r.setBssid(bssid);
			roteadorRepo.save(r);
			return 1;
		} else {
			return 0;
		}

	}

	public List<Roteador> getRoteadores() {

		List<Roteador> roteadoresCadastrados = roteadorRepo.findAll();

		return roteadoresCadastrados;

	}

	public Roteador getRoteadorById(long id) {

		Roteador roteador = roteadorRepo.getOne(id);

		return roteador;

	}

}
