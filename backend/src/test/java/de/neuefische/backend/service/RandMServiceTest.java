package de.neuefische.backend.service;

import de.neuefische.backend.model.RandMCharacter;
import de.neuefische.backend.repository.RandMRepo;
import org.junit.jupiter.api.Test;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

class RandMServiceTest {

    RandMRepo randMRepo = mock(RandMRepo.class);
    GenerateUUIDService generateUUIDService = mock(GenerateUUIDService.class);
    WebClient webClient = mock(WebClient.class);

    RandMService randMService = new RandMService(randMRepo, generateUUIDService);

    @Test
    void testGetAllCharacters_when_character_list_is_not_empty_then_no_request_to_api_and_repo_is_called() {
        // given
        List<RandMCharacter> characters = new ArrayList<>();
        RandMCharacter character1 = new RandMCharacter();
        characters.add(character1);
        when(randMRepo.getAllCharacters()).thenReturn(characters);

        // when
        List<RandMCharacter> allCharacters = randMService.getAllCharacters();

        //then
        verify(randMRepo, times(2)).getAllCharacters();
    }

}