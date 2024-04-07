package com.green.talkwithme.ai.model;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.ollama.OllamaChatClient;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class OllamaModel implements AiModel {

    private final OllamaChatClient chatClient;

    @Override
    public String chat(String humanMessage) {
        return chatClient.call(humanMessage);
    }
}
