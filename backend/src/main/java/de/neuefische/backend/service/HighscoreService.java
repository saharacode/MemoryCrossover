package de.neuefische.backend.service;

import de.neuefische.backend.dto.GameResultDTO;
import de.neuefische.backend.model.GameResult;
import de.neuefische.backend.repository.HighscoreRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HighscoreService {
    private final HighscoreRepo highscoreRepo;
    private final GenerateUUIDService generateUUIDService;

    public List<GameResult> save(GameResultDTO gameResult) {
        GameResult newGameResult = new GameResult(generateUUIDService.generateUUID(),
                gameResult.getPlayerName(), gameResult.getScore(), gameResult.getRemainingTime(),
                gameResult.getNumberOfSteps(), LocalDateTime.now());
        highscoreRepo.save(newGameResult);
        return highscoreRepo.findAll();
    }

    public List<GameResult> findAll() {
        return highscoreRepo.findAll();
    }

    public List<GameResult> findAllByOrderByScoreAsc() {
        return highscoreRepo.findAllByOrderByScoreAsc();
    }

    public List<GameResult> findAllByOrderByScoreDesc() {
        return highscoreRepo.findAllByOrderByScoreDesc();
    }

    public List<GameResult> findAllByOrderByTimestampAsc() {
        return highscoreRepo.findAllByOrderByTimestampAsc();
    }

    public List<GameResult> findAllByOrderByTimestampDesc() {
        return highscoreRepo.findAllByOrderByTimestampDesc();
    }
}
