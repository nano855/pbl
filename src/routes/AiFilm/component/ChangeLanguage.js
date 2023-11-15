import {changeLanguage} from '../redux/langActions';
import {connect} from 'react-redux';
import {LanguageBtnStyled} from './ChangeLanguage.style';
import {useTranslation} from 'react-i18next';

const ChangeLanguage = ({language, changeLanguage}) => {
  const {i18n} = useTranslation()
  const switchLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <LanguageBtnStyled onClick={() => switchLanguage('en')}>En</LanguageBtnStyled>
      <LanguageBtnStyled onClick={() => switchLanguage('fr')}>Fr</LanguageBtnStyled>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};
const mapDispatchToProps = {
  changeLanguage,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);