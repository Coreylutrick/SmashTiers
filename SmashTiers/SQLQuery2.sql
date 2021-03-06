WHILE(EXISTS(SELECT 1 FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE CONSTRAINT_TYPE='FOREIGN KEY'))
BEGIN
	DECLARE @sql NVARCHAR(2000)
	SELECT TOP 1 @sql=('ALTER TABLE ' + TABLE_SCHEMA + '.[' + TABLE_NAME
	+ '] DROP CONSTRAINT [' + CONSTRAINT_NAME + ']')
	FROM information_schema.table_constraints
	WHERE CONSTRAINT_TYPE = 'FOREIGN KEY'
	EXEC (@sql)
END

IF  OBJECT_ID('Character','U') IS NOT NULL
DROP TABLE Character

IF  OBJECT_ID('MoveSetDamageData','U') IS NOT NULL
DROP TABLE MoveSetDamageData

IF  OBJECT_ID('MoveSetFrameData','U') IS NOT NULL
DROP TABLE MoveSetFrameData

CREATE TABLE Character (
  Id int not null PRIMARY KEY IDENTITY(1,1),
  CharacterName varchar(50) not null,
  Weight int not null,
  Speed DECIMAL(4,3) not null,
  MoveSetDamageId int not null,
  MoveSetFrameDataId int not null,
  TournamentStandingId int,
  IsFavorite bit not null,
  Picture varchar(MAX) not null 
);

CREATE TABLE TierList (
	Id int not null PRIMARY KEY IDENTITY(1,1),
	Title varchar(100) not null
);

CREATE TABLE VeryHighTier (
	TierListId int not null,
	Title varchar(100),
	CharacterImage varchar(200)
)

CREATE TABLE HighTier (
	TierListId int not null,
	Title varchar(100),
	CharacterImage varchar(200)
)

CREATE TABLE MediumTier (
	TierListId int not null,
	Title varchar(100),
	CharacterImage varchar(200)
)

CREATE TABLE LowTier (
	TierListId int not null,
	Title varchar(100),
	CharacterImage varchar(200)
)

CREATE TABLE VeryLowTier (
	TierListId int not null,
	Title varchar(100),
	CharacterImage varchar(200)
)

CREATE TABLE [User] (
	Id int not null PRIMARY KEY IDENTITY(1,1),
	FirstName varchar(50) not null,
	LastName varchar(50)not null,
	IsActive bit not null,
	FirebaseId varchar(100)
);

CREATE TABLE MoveSetFrameData (
	Id int not null PRIMARY KEY IDENTITY(1,1),
	CharacterId int not null,
	JabOne DECIMAL(5,2) not null,
	JabTwo int not null,
	JabThree int not null,
	FTilt int not null,
	UTilt int not null,
	DTilt int not null,
	DashAttack int not null,
	FSmash int not null,
	USmash int not null,
	DSmash int not null,
	NAir int not null,
	FAir int not null, 
	BAir int not null,
	UAir int not null,
	DAir int not null,
	Special int not null,
	SideSpecial int not null,
	UpB int not null,
	ForwardThrow int not null,
	BackThrow int not null,
	UpThrow int not null,
	DownThrow int not null
);

CREATE TABLE MoveSetDamageData (
	Id int not null PRIMARY KEY IDENTITY(1,1),
	CharacterId int not null,
	JabOne2 int not null,
	JabTwo2 int not null,
	JabThree2 int not null,
	FTilt2 int not null,
	UTilt2 int not null,
	DTilt2 int not null,
	DashAttack2 int not null,
	FSmash2 int not null,
	USmash2 int not null,
	DSmash2 int not null,
	NAir2 int not null,
	FAir2 int not null, 
	BAir2 int not null,
	UAir2 int not null,
	DAir2 int not null,
	Special2 int not null,
	SideSpecial2 int not null,
	UpB2 int not null,
	ForwardThrow2 int not null,
	BackThrow2 int not null,
	UpThrow2 int not null,
	DownThrow2 int not null
);

ALTER TABLE MoveSetFrameData 
ADD CONSTRAINT FK_MoveSetFrameData_Character
FOREIGN KEY (CharacterId) REFERENCES Character(Id);

ALTER TABLE MoveSetDamageData 
ADD CONSTRAINT FK_MoveSetDamageData_Character
FOREIGN KEY (CharacterId) REFERENCES Character(Id);

