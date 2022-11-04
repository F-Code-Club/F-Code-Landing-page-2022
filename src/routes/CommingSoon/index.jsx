const CommingSoon = () => {
    const styles = {
        marginTop: '120px',
        fontSize: '60px',
        marginBottom: '6px',
    };

    const styles2 = { color: '#6B7280', marginBottom: '120px' };
    return (
        <div>
            <h1 style={styles}>Comming soon...</h1>
            <p style={styles2}>
                Oops. We’re preparing something. Come back later to see cool things!
            </p>
        </div>
    );
};

export default CommingSoon;
