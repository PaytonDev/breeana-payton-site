import { useState } from "react";
import { Flex, Text, Card, Box } from "@radix-ui/themes";
import { resume_data } from "./data";
import s from "./Resume.module.css";

export const Resume = () => {
  const [selectedJob, setSelectedJob] = useState(resume_data[0]);

  return (
    <Flex direction="column" className={s.resume_container} mx="auto" px="7">
      <Flex className={s.resume_main} grow="1" justify="center" width="100%">
        <Card className={s.resume_display_container}>
          <Flex direction="column" align="center" gap="2">
            <Text className={s.resume_main_company} weight="bold" size="8">
              {selectedJob.company}
            </Text>
            <Text className={s.resume_main_title} weight="medium" size="6">
              {selectedJob.title}
            </Text>
            <Text className={s.resume_main_date} size="3">
              {selectedJob.date}
            </Text>
            <Text className={s.resume_main_description}>{selectedJob.description.summary}</Text>
            <Box>
              <ul>
                {selectedJob.description.bullets.map((bullet, idx) => (
                  <li key={bullet + idx}>
                    <Text className={s.resume_main_bullet}>{bullet}</Text>
                  </li>
                ))}
              </ul>
            </Box>
          </Flex>
        </Card>
      </Flex>
      <Flex className={s.resume_job_cards} direction="row" justify="center" gap="7" p="8">
        {resume_data.map((job, idx) => (
          <Card className={s.resume_job_card} key={job.date + idx} asChild>
            <button onClick={() => setSelectedJob(resume_data[idx])}>
              <Flex direction="column" align="center" p="4" justify="center">
                <Text className={s.resume_job_card_company}>{job.company}</Text>
                <Text className={s.resume_job_card_title}>{job.title}</Text>
                <Text className={s.resume_job_card_date}>{job.date}</Text>
              </Flex>
            </button>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};
