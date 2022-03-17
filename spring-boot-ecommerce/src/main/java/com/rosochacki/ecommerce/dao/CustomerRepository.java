package com.rosochacki.ecommerce.dao;

import com.rosochacki.ecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
