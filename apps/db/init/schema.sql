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
