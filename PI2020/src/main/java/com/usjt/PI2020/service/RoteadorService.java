package com.usjt.PI2020.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import com.usjt.PI2020.model.Roteador;
import com.usjt.PI2020.repository.JPAUtil;

public class RoteadorService {

	public void insertWifiData(EntityManager manager) throws IOException {

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
		
		EntityManager eManager = manager;
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		
		for (int i=0;i<ssids.size();i++)
	    {
			Roteador roteador = new Roteador();
			roteador.setBssid(bssids.get(i));
			roteador.setSsid(ssids.get(i));
			
			if(!eManager.contains(roteador)) {
			
				eManager.persist(roteador);
				
			}
			
			
	    }
		
		transaction.commit();
	}
	
	
	public List<Roteador> getRoteadores() throws IOException{
		EntityManager manager = JPAUtil.getEntityManager();
		
		insertWifiData(manager);
		
		Query query = manager.createQuery("from Roteador");
		List<Roteador> roteadores = query.getResultList();

		
		return roteadores;
		
	}
	
	public Roteador getRoteadorById(long id) {
		EntityManager manager = JPAUtil.getEntityManager();
		Roteador roteador = manager.find(Roteador.class, id);
		manager.close();
		JPAUtil.close();
		
		return roteador;
		
	}
		
	
}
