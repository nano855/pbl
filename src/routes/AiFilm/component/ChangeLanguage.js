import { changeLanguage } from '../redux/langActions';
import { connect } from 'react-redux';
import { LanguageBtnStyled } from './ChangeLanguage.style';
import { useTranslation } from 'react-i18next';

const ChangeLanguage = ({ language, changeLanguage }) => {
    const {t} = useTranslation()
    return (
        <>
            <p>{t('logout')}</p>
            <LanguageBtnStyled onClick={() => changeLanguage('en')}>En</LanguageBtnStyled>
            <LanguageBtnStyled onClick={() => changeLanguage('fr')}>Fr</LanguageBtnStyled>
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