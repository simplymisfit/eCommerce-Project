package com.rosochacki.ecommerce.dto;

import com.rosochacki.ecommerce.entity.Address;
import com.rosochacki.ecommerce.entity.Customer;
import com.rosochacki.ecommerce.entity.Order;
import com.rosochacki.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;

    private Address shippingAddress;

    private Address billingAddress;

    private Order order;

    private Set<OrderItem> orderItems;
}
