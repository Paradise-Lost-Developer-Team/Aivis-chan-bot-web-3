import { NavBar } from "../components/navbar"
import { Accordion, Box, Container, Heading, Text } from "@chakra-ui/react"

const accordionItems = [
  {
    value: "getting-started",
    title: "Getting Started",
    content: "This accordion demonstrates the basic functionality of Chakra UI v3 accordion component. You can expand and collapse items to reveal content."
  },
  {
    value: "features",
    title: "Features",
    content: "The accordion supports multiple open panels, keyboard navigation, and smooth animations. It's fully accessible and customizable."
  },
  {
    value: "customization",
    title: "Customization",
    content: "You can customize the appearance with different variants like 'outline', 'subtle', 'enclosed', or 'plain'. You can also adjust sizes and colors."
  },
  {
    value: "advanced",
    title: "Advanced Usage",
    content: "Advanced features include controlled state, disabled items, custom indicators, and integration with other Chakra UI components."
  }
]

export default function Page() {
  return (
    <Container maxW="4xl" py={8}>
      <Box mb={8}>
        <NavBar />
      </Box>
      
      <Box>
        <Heading size="lg" mb={6}>
          Chakra UI Accordion Demo
        </Heading>
        
        <Accordion.Root 
          collapsible 
          defaultValue={["getting-started"]}
          variant="outline"
        >
          {accordionItems.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.ItemTrigger>
                <Text flex="1" textAlign="start">
                  {item.title}
                </Text>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  {item.content}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
    </Container>
  )
}
