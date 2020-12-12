import "../styles/styles.css";

const Label: React.FC = ({ children }) => (
  <div className="label">
    {children}
  </div>
)

const FooterItem: React.FC = ({ children }) => (
  <div className="footer-item">
    {children}
  </div>
);

const CardFooter: React.FC = ({ children }) => (
  <div className="card-footer">
    {children}
  </div>
)

const CardLocation = () => (
  <a href="#">Albany, New York</a>
)

const CardName: React.FC = () => (
  <h1>Maria Elliott</h1>
)

const CardDetails: React.FC = ({ children }) => (
  <div className="card-details">
    {children}
  </div>
)

const CardBody: React.FC = ({ children }) => (
  <div className="card-body">
    {children}
  </div>
)

const CardAvatar: React.FC = () => (
  <img src="https://i.pravatar.cc/90" alt="An avatar" />
)

const Card: React.FC = ({ children }) => (
  <div className="card">
    {children}
  </div>
)

const HomePage = () => (
  <>
    <section>
      <Card>
        <CardAvatar />
        <CardBody>
          <CardDetails>
            <CardName />
            <CardLocation />
          </CardDetails>
          <CardFooter>
            <FooterItem>
              <Label>
                purchased
	      </Label>
              120
	    </FooterItem>
            <FooterItem>
              <Label>
                wished
	      </Label>
              271
	    </FooterItem>
            <FooterItem>
              <Label>
                likes
	      </Label>
              12k
	    </FooterItem>
          </CardFooter>
        </CardBody>
      </Card>
    </section>
  </>
);
export default HomePage;
