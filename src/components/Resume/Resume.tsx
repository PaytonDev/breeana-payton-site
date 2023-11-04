import { RadioGroup, Flex, Text, Card, Box } from "@radix-ui/themes";
import s from "./Resume.module.css";

export const Resume = () => (
  <Flex direction="column" className={s.resume_container} mx="auto" px="7">
    <Flex className={s.resume_main} grow="1" justify="center" width="100%">
      <Card className={s.resume_display_container}>
        <Flex direction="column" align="center">
          <Text className={s.resume_main_title}>AutoZone</Text>
          <Text className={s.resume_main_subtitle}>Software Engineer</Text>
        </Flex>
      </Card>
    </Flex>
    <Flex className={s.resume_job_cards} direction="row" justify="center" gap="7" p="8">
      <Card className={s.resume_job_card}>
        <Flex direction="column" align="center" p="4" justify="center">
          <Text className={s.resume_job_card_title}>AutoZone</Text>
          <Text className={s.resume_job_card_subtitle}>Software Engineer</Text>
          <Text className={s.resume_job_card_subtitle}>June 2021 - Present</Text>
        </Flex>
      </Card>
      <Card className={s.resume_job_card}>
        <Flex direction="column" align="center" p="4" justify="center">
          <Text className={s.resume_job_card_title}>AT&T</Text>
          <Text className={s.resume_job_card_subtitle}>Software Engineer</Text>
          <Text className={s.resume_job_card_subtitle}>June 2021 - Present</Text>
        </Flex>
      </Card>
      <Card className={s.resume_job_card}>
        <Flex direction="column" align="center" p="4" justify="center">
          <Text className={s.resume_job_card_title}>Cox Automotive</Text>
          <Text className={s.resume_job_card_subtitle}>Implementation Specialist</Text>
          <Text className={s.resume_job_card_subtitle}>June 2021 - Present</Text>
        </Flex>
      </Card>
    </Flex>
  </Flex>
);
