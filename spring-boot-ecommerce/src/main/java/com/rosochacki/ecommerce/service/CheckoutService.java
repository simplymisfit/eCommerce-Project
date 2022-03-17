package com.rosochacki.ecommerce.service;

import com.rosochacki.ecommerce.dto.Purchase;
import com.rosochacki.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
