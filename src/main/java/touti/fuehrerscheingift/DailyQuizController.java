package touti.fuehrerscheingift;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.json.JsonMapper;

import java.io.InputStream;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@RestController
public class DailyQuizController {

    private static final ZoneId GERMANY_ZONE = ZoneId.of("Europe/Berlin");

    private final JsonMapper objectMapper;

    public DailyQuizController(JsonMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @GetMapping("/api/daily-quiz")
    public List<QuizQuestion> getDailyQuiz() {
        List<QuizQuestion> questions = new ArrayList<>(loadQuestionPool());

        long todaySeed = LocalDate.now(GERMANY_ZONE).toEpochDay();

        Collections.shuffle(questions, new Random(todaySeed));

        return questions.stream()
                .limit(10)
                .toList();
    }

    private List<QuizQuestion> loadQuestionPool() {
        try {
            ClassPathResource resource = new ClassPathResource("daily-quiz.json");

            try (InputStream inputStream = resource.getInputStream()) {
                return objectMapper.readValue(
                        inputStream,
                        new TypeReference<List<QuizQuestion>>() {}
                );
            }
        } catch (Exception exception) {
            throw new IllegalStateException("Could not load daily-quiz.json", exception);
        }
    }

    public record QuizQuestion(
            String question,
            List<QuizAnswer> answers,
            String explanation
    ) {}

    public record QuizAnswer(
            String text,
            boolean correct
    ) {}
}