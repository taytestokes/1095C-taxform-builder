SELECT * FROM documents
WHERE user_id = $1
ORDER BY createddate DESC;