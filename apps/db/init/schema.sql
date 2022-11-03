CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS Users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255),
    password VARCHAR(32),
    nickname VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Image(
    image_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Workspace(
    workspace_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255),
    background uuid references Image(image_id),
    icon uuid references Image(image_id)
);

CREATE TABLE IF NOT EXISTS WorkspaceUser(
    workspace_id uuid references Workspace(workspace_id),
    user_id uuid references Users(user_id)
);


CREATE TABLE IF NOT EXISTS Dialogue(
    dialogue_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    content jsonb,
    name VARCHAR(255),
    description text
);

CREATE TYPE privileges AS ENUM ('red', 'green', 'blue');

CREATE TABLE IF NOT EXISTS WorkspaceDialogue(
    workspace_id uuid references Workspace(workspace_id),
    dialogue_id uuid references Dialogue(dialogue_id),
    dialogue_privilege privileges
);

CREATE TABLE IF NOT EXISTS Resource(
    resource_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id uuid references Workspace(workspace_id),
    name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS ElementTemplate(
    template_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id uuid references Workspace(workspace_id),
    name VARCHAR(255),
    description text,
    default_color point
);

CREATE TABLE IF NOT EXISTS Subscription(
    subscription_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    price decimal,
    duration interval
);

CREATE TABLE IF NOT EXISTS SubscriptionUser(
    subscription_id uuid references Subscription(subscription_id),
    user_id uuid references Users(user_id),
    expiry_time timestamp
);



/* TODO: Remove it in production

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

*/



