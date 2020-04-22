package com.usjt.PI2020.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.usjt.PI2020.model.Roteador;
import com.usjt.PI2020.repository.RoteadorRepository;

public class RoteadorService {

	@Autowired
	private RoteadorRepository roteadorRepo;

	public void insertWifiData() throws IOException {

		ArrayList<String> ssids = new ArrayList<>();
		ArrayList<String> bssids = new ArrayList<>();

		ProcessBuilder builder = new ProcessBuilder("cmd.exe", "/c", "netsh wlan show all");
		builder.redirectErrorStream(true);
		Process p = builder.start();
		BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
		String line;
		while (r.read() != -1) {
			line = r.readLine();
			if (line.contains("SID") || line.contains("Sinal") || line.contains("BSSID")) {
				if (!line.contains("Nome") && !line.contains("=") && !line.contains("SSIDs") && !line.contains("BSSID")
						&& !line.contains("Sinal")) {

					line = line.substring(8);
					ssids.add(line);
				}
				if (line.contains("BSSID 1") && !line.contains("=")) {

					line = line.substring(29);
					bssids.add(line);
				}

			}

		}

		ssids.remove(0);

			for (int i = 0; i < ssids.size(); i++) {
				Roteador roteador = new Roteador();
				roteador.setBssid(bssids.get(i));
				roteador.setSsid(ssids.get(i));

				roteadorRepo.save(roteador);

			}

		
		

	}

	public List<Roteador> getRoteadores() throws IOException {

		insertWifiData();

		List<Roteador> roteadoresCadastrados = roteadorRepo.findAll();

		return roteadoresCadastrados;

	}

	public Roteador getRoteadorById(long id) {

		Roteador roteador = roteadorRepo.getOne(id);

		return roteador;

	}

}
