export default function Tabs({ children, buttons, buttonsContainer }) {
  const Container = buttonsContainer || "div"; // Default to div if no container is provided - important: custom components need to be capitalized
  return (
    <>
      <Container>{buttons}</Container>
      {children}
    </>
  );
}
