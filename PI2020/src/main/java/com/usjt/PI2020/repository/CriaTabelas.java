package com.usjt.PI2020.repository;

import javax.persistence.Persistence;

public class CriaTabelas {

	public static void main(String[] args) {

		Persistence.createEntityManagerFactory("usjtPI");

	}

}
