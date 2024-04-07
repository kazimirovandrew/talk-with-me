package com.green.talkwithme.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.green.talkwithme"})
public class TalkWithMeServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(TalkWithMeServerApplication.class, args);
    }

}
