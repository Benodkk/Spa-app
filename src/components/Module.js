import {
  StyledModule,
  StyledCloseButton,
  StyledBlackBG,
  StyledModuleInfoContent,
  StyledModuleContent,
} from "./style/Module.style";

const Module = ({ result, visible, setVisible }) => {
  return (
    <StyledModule visible={visible}>
      <StyledBlackBG />
      <StyledModuleContent>
        <StyledModuleInfoContent>
          <div>
            <strong>ID: </strong>
            {result.id}
          </div>
          <div>
            <strong>Name: </strong>
            {result.name}
          </div>
          <div>
            <strong>Year: </strong>
            {result.year}
          </div>
          <div>
            <strong>Pantone value: </strong>
            {result.pantone_value}
          </div>
          <div>
            <strong>Color: </strong>
            {result.color}
          </div>
        </StyledModuleInfoContent>
        <StyledCloseButton variant="text" onClick={() => setVisible(false)} />
      </StyledModuleContent>
    </StyledModule>
  );
};

export default Module;
