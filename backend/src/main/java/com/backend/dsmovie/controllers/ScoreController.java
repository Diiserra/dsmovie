package com.backend.dsmovie.controllers;

import com.backend.dsmovie.dto.MovieDTO;
import com.backend.dsmovie.dto.ScoreDTO;
import com.backend.dsmovie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO scoreDTO) {
        MovieDTO movieDTO = service.saveScore(scoreDTO);

        return movieDTO;
    }
}