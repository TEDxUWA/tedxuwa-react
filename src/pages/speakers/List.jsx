import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";
import PageHeader from "../../components/PageHeader";
import API from "../../services/Api";
import SpeakerRegistrationSection from "../../components/SpeakerRegistrationSection";

export default class SpeakersListPage extends Component {
  state = {
    people: []
  };
  async componentDidMount() {
    document.title = "TEDxUWA | Speakers & Performers";
    const { results: people } = await API.GET("speakers");
    this.setState({ people });
  }
  render() {
    const { people } = this.state;
    console.log(people);
    return (
      <div className="speakers-list page">
        <PageHeader title="Speakers & Performers" root="/speakers" />
        <Container className="py-4">
          <Row>
            {people.map(person => (
              <Col xs={6} md={4} lg={3} className="mb-3" key={person.id}>
                <Card style={{ height: 270 }} className="border-0">
                  <CardImg
                    height={200}
                    style={{ objectFit: "contain" }}
                    top
                    width="100%"
                    src={person.profile_image}
                  />
                  <CardBody className="px-0 text-center">
                    <CardTitle className="h5">{person.name}</CardTitle>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <SpeakerRegistrationSection />
      </div>
    );
  }
}
