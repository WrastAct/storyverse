INSERT INTO users (email, password, nickname)
VALUES ('putin_lox@ukr.gov.ua', 'password1234321', 'chushka');

INSERT INTO image (name)
VALUES ('server.com/workspace_id/image_id/image_name.png');

INSERT INTO workspace (name, background, icon)
VALUES ('Ukraine',
        'ebc11b61-b4b9-47f7-86e6-472aeb353543',
        'ebc11b61-b4b9-47f7-86e6-472aeb353543');

INSERT INTO workspace (name, background, icon)
VALUES ('putin_lox',
        'ebc11b61-b4b9-47f7-86e6-472aeb353543',
        'ebc11b61-b4b9-47f7-86e6-472aeb353543');

INSERT INTO workspaceuser (workspace_id, user_id)
VALUES ('b4fb3443-2e77-43aa-a189-cc9911b0eb1a',
        'c9698d0e-7e48-47fe-96aa-01410d91ea82');

INSERT INTO workspaceuser (workspace_id, user_id)
VALUES ('99eaf6f9-818a-4dac-b654-c2e4270617df',
        'c9698d0e-7e48-47fe-96aa-01410d91ea82');

INSERT INTO dialogue (content, name, description)
VALUES ('{}'::json,
        'test_name',
        'А я вам зараз покажу Откуда на БЕЛАСУСЬ готовилось нападение');

INSERT INTO dialogue (content, name, description)
VALUES ('{"info": {"name": "test_name"}, "node_amount": 10}'::json,
        'test_name',
        'А я вам зараз покажу Откуда на БЕЛАСУСЬ готовилось нападение');

INSERT INTO dialogue (content, name, description)
VALUES ('{"info": {"name": "test_name_2"}, "node_amount": 15}'::json,
        'test_name_2',
        'А я вам зараз покажу Откуда на БЕЛАСУСЬ готовилось нападение');

INSERT INTO workspacedialogue (workspace_id, dialogue_id, dialogue_privilege)
VALUES ('99eaf6f9-818a-4dac-b654-c2e4270617df',
        '88893215-2ba7-435d-bbfd-de1b250b7c28',
        'red');

INSERT INTO workspacedialogue (workspace_id, dialogue_id, dialogue_privilege)
VALUES ('b4fb3443-2e77-43aa-a189-cc9911b0eb1a',
        '8a8fd75b-7c96-4c43-9f85-288d7d5ec70d',
        'green');




