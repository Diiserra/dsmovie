package com.backend.dsmovie.repositories;

import com.backend.dsmovie.entities.Score;
import com.backend.dsmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}