package com.example.HomeAppliance.controller;

import com.example.HomeAppliance.dto.ApplianceDto;
import com.example.HomeAppliance.model.Appliance;
import com.example.HomeAppliance.model.Attributes;
import com.example.HomeAppliance.model.Location;
import com.example.HomeAppliance.model.Type;
import com.example.HomeAppliance.service.ApplianceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/home")
public class Controller {
    @Autowired
    ApplianceService service;

    @GetMapping("/all")
    public ResponseEntity<List<Appliance>> getAll(){
        return service.getAll();
    }

    @GetMapping("/getOne/{id}")
    public ResponseEntity<Appliance> getOne(@PathVariable ("id")String id){
        return service.getOne(id);
    }

    @PostMapping("/add/appliaces/")
    public Appliance addApliance(@RequestBody ApplianceDto appliance){
        return service.convertApplianceDtoToAppliance(appliance);
    }

    @PutMapping("/changeStatus/{id}")
    public ResponseEntity<List<Appliance>> changeStatus(@PathVariable("id")String id){
        return  service.changeStatus(id);
    }

    @PutMapping("/increaseAttr/{id}")
    public List<Appliance> increaseValue(@PathVariable("id")String id){
        return  service.increaseV(id);
    }

    @PutMapping("/decreaseAttr/{id}")
    public List<Appliance> decreaseValue(@PathVariable("id")String id){
        return  service.decreaseV(id);
    }

    @GetMapping("/getattribute/{id}")
    public ResponseEntity<Attributes> findAttribute(@PathVariable ("id")String id ){
        return service.findAttr(id);
    }






}
