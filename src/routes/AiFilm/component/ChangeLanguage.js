import { changeLanguage } from 'i18next';
import { connect } from 'react-redux';

function ChangeLanguage({ language, changeLanguage }) {

    return (
        <>
            <span onClick={() => changeLanguage('en')}>En</span>
            <span onClick={() => changeLanguage('fr')}>Fr</span>
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