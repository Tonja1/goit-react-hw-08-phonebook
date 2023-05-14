import { useAuth } from "hooks/useAuts";
import { StyledLink, Title, TitleBox } from "components/AuthNav/AuthNavStyled";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <TitleBox>
      <StyledLink to="/">
        <Title>Home</Title>
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          <Title>Contacts</Title>
        </StyledLink>
      )}
    </TitleBox>
  );
};