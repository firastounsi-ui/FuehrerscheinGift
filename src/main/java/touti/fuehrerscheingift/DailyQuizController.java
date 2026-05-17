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
    private static final int DAILY_QUESTION_COUNT = 10;

    private static final List<CategoryQuota> DAILY_MIX = List.of(
            new CategoryQuota("priority", 2),
            new CategoryQuota("signs", 2),
            new CategoryQuota("speed", 2),
            new CategoryQuota("autobahn", 1),
            new CategoryQuota("weather", 1),
            new CategoryQuota("pedestrians", 1),
            new CategoryQuota("parking", 1)
    );

    private final JsonMapper objectMapper;

    public DailyQuizController(JsonMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @GetMapping("/api/daily-quiz")
    public List<QuizQuestion> getDailyQuiz() {
        List<QuizQuestion> pool = loadQuestionPool();

        long todaySeed = LocalDate.now(GERMANY_ZONE).toEpochDay();

        List<QuizQuestion> selected = new ArrayList<>();

        for (CategoryQuota quota : DAILY_MIX) {
            selected.addAll(
                    pickFromCategory(pool, quota.category(), quota.count(), todaySeed)
            );
        }

        List<QuizQuestion> remaining = new ArrayList<>(
                pool.stream()
                        .filter(question -> !selected.contains(question))
                        .toList()
        );

        Collections.shuffle(remaining, new Random(todaySeed + 999));

        for (QuizQuestion question : remaining) {
            if (selected.size() >= DAILY_QUESTION_COUNT) {
                break;
            }

            selected.add(question);
        }

        Collections.shuffle(selected, new Random(todaySeed * 31 + 7));

        return selected.stream()
                .limit(DAILY_QUESTION_COUNT)
                .toList();
    }

    private List<QuizQuestion> pickFromCategory(
            List<QuizQuestion> pool,
            String category,
            int count,
            long seed
    ) {
        List<QuizQuestion> categoryQuestions = new ArrayList<>(
                pool.stream()
                        .filter(question -> category.equals(question.category()))
                        .toList()
        );

        Collections.shuffle(
                categoryQuestions,
                new Random(seed + category.hashCode())
        );

        return categoryQuestions.stream()
                .limit(count)
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
            String category,
            String difficulty,
            String question,
            List<QuizAnswer> answers,
            String explanation
    ) {}

    public record QuizAnswer(
            String text,
            boolean correct
    ) {}

    private record CategoryQuota(
            String category,
            int count
    ) {}
}