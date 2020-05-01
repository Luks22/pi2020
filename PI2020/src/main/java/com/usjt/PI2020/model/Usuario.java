package com.usjt.PI2020.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "usuario")
public class Usuario implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, length = 100)
	private String nome;
	
	@OneToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "id_login")
	private Login login;
	
	@Column(nullable = true, length = 200)
	private String localizacao;
	
	@Column(nullable = true, length = 200)
	private String longitude;
	
	@Column(nullable = true, length = 200)
	private String latitude;
	
	@Column(nullable = true, length = 200)
	private String altitude;
	
	@Column(nullable = true, length = 200)
	private String roteadorBssid;
	
	@OneToOne(optional = false, cascade=CascadeType.ALL)
	@JoinColumn(name = "id_celular")
	private Celular celular;
	
	@JsonIgnore
	@ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinTable(name = "lista_amigos",  
            joinColumns = { @JoinColumn(name = "id_usuario") }, 
            inverseJoinColumns = { @JoinColumn(name = "id_amigo") } )
    private List<Usuario> amigos;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}


	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}

	public String getLocalizacao() {
		return localizacao;
	}

	public void setLocalizacao(String localizacao) {
		this.localizacao = localizacao;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getAltitude() {
		return altitude;
	}

	public void setAltitude(String altitude) {
		this.altitude = altitude;
	}

	public String getRoteadorBssid() {
		return roteadorBssid;
	}

	public void setRoteadorBssid(String roteadorBssid) {
		this.roteadorBssid = roteadorBssid;
	}

	public Celular getCelular() {
		return celular;
	}

	public void setCelular(Celular celular) {
		this.celular = celular;
	}


	public List<Usuario> getAmigos() {
		return amigos;
	}

	public void setAmigos(List<Usuario> amigos) {
		this.amigos = amigos;
	}


	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nome=" + nome + ", localizacao=" + localizacao
				+ ", longitude=" + longitude + ", latitude=" + latitude + ", altitude=" + altitude + ", roteadorBssid="
				+ roteadorBssid + ", celular=" + celular + ", amigos=" + amigos + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	
}
