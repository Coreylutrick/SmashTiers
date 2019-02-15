import React, { Component } from 'react';
import tierListRequests from '../../DBRequests/TierListsRequests';
import characterRequests from '../../DBRequests/CharacterRequests';
import { Modal, Glyphicon} from 'react-bootstrap';
import fbRequests from '../../FbRequests/auth';
import { Dropdown, Icon, Button, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './AllTierLists.css'

const plainTierList =
{
  Id: 0,
  Title: "",
  Uid: ""
}

const plainTier =
{
  TierListId: 0,
  Title2: "",
  CharacterImage: ""
}

export class AllTierLists extends Component {

  state=
  {
    tierList: [],
    newTierList: plainTierList,
    characters: [],
    newTier: plainTier,
    tierNames: [
      "Very High Tier",
      "High Tier",
      "Medium Tier",
      "Low Tier",
      "Very Low Tier"
    ]
  }

  componentDidMount() {
    tierListRequests
    .getAllTierLists()
    .then((tierList) =>
    {
      this.setState({ tierList })
    })
    .catch((err) =>
    {
      console.error(err)
    })
  }

  getCharacters = () =>
  {
    characterRequests.getAllCharactersRequest()
    .then((res) =>
    {
      this.setState({characters: res});
    })
    .catch((err) =>
    {
      console.error(err);
    });
  }

  postTierList = () => {
    tierListRequests.postNewTierList(this.state.newTierList);
    this.handleClose();
  }

  postTier = () =>
  {
    tierListRequests.postNewTier(this.state.newTier);
  }

  tierListState = (name, e) => {
    const tempTierList = { ...this.state.newTierList };
    tempTierList[name] = e.target.value;
    this.setState({ newTierList: tempTierList });
  }

  tierListUidState = () => {
    const tempTierList = { ...this.state.newTierList };
    tempTierList["Uid"] = fbRequests.getUid();
    this.setState({ newTierList: tempTierList });
  }

  tierCharacterTierAssign = (e, {value}) =>
  {
    const tempTier = {...this.state.newTier};
    tempTier["Title2"] = value;
    this.setState({ newTier: tempTier})
  }

  tierTierListAssign = (e, {value}) =>
  {
    const tempTier = {...this.state.newTier};
    tempTier["TierListId"] = value;
    this.setState({ newTier: tempTier})
  }

  characterPictureAssign = (e, {value}) =>
  {
    const tempTier = {...this.state.newTier};
    tempTier["CharacterImage"] = value;
    this.setState({ newTier: tempTier})
  }

  tierListTitleCreate = (e) => {
    this.tierListState("Title", e);
  }

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    this.tierListUidState();
    this.getCharacters();
  }

  render ()
  {
    const singleTierList = (id) =>
    {
      this.props.history.push(`/tierList/${id}`)
    }


    const allTierLists = this.state.tierList.map((tier) =>
    {
      return (
        <div key={tier.id} className="col-xs-3 singleList">
          <Card raised color="blue">
            <Card.Content>
              <Card.Header>{tier.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <div>
                <Button inverted color='green' onClick={() => singleTierList(tier.id)}>
                  View
                </Button>
              </div>
            </Card.Content>
          </Card>
        </div>
      );
    });

    const characterRemake = this.state.characters.map((character) =>
    {
      return {
          text: character.characterName,
          value: character.picture,
          image: { avatar: true, src: character.picture }
        };
    })

    const tierListRemake = this.state.tierList.map((list) =>
    {
      return {
          text: list.title,
          value: list.id,
          image: { avatar: false }
        };
    })

    const tierTierNameRemake = this.state.tierNames.map((name) =>
    {
      return {
          text: name,
          value: name,
          image: { avatar: false }
        };
    })

    return (
      <div>
        <h1 className="title">Tier Lists</h1>
        <div className="button">
          <Button onClick={this.handleShow} inverted color='green'>Create New Tier List</Button>
        </div>
        <div className="tierLists">
          {allTierLists}
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>New Tier List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input placeholder="Tier List Title" onChange={this.tierListTitleCreate} /> <Button inverted color='blue' onClick={this.postTierList}><Icon name='save' className="icon"/></Button>
            <Dropdown placeholder='Select TIer List' fluid selection options={tierListRemake} onChange={this.tierTierListAssign} />
            <Dropdown placeholder='Select Character To Add' fluid selection options={characterRemake} onChange={this.characterPictureAssign} />
            <Dropdown placeholder='Select Tier To Add Character Too' fluid selection options={tierTierNameRemake} onChange={this.tierCharacterTierAssign} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose} inverted color='red'>Close</Button>
            <Button inverted color='blue' onClick={this.postTier}><Icon name='save' className="icon"/></Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}