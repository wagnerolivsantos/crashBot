const {
    SITE,
    START_DATE,
    END_DATE
} = process.env;

const apiUrl = `${SITE}?startDate=%22${START_DATE}T03:00:00.000Z%22&endDate=%22${END_DATE}T03:00:00.000Z%22`;

module.exports = apiUrl;
