package com.green.talkwithme.ai;

import com.green.talkwithme.ai.model.AiModel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class AiClient {

    private final AiModel aiModel;

    public String chat(String humanMessage) {
        return aiModel.chat(humanMessage);
    }
}
