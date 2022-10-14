import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import {
  Container,
  Wrapper,
  SubContainer,
  BasicInformation,
  Title,
  UserInfo,
  Info,
  User,
  Name,
  Member,
  Stat,
  Setting,
  EditProfile,
  Avatar,
} from "./profileElements";
import logo from "../../images/logo.svg";
import { userState } from "../../recoilFiles/atom";
import { useRecoilState } from "recoil";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const user = useRecoilState(userState);

  return (
    <Container>
      <SideBar />
      <Wrapper>
        <SubContainer>
          <Title>Profile</Title>
          {user && (
            <BasicInformation>
              <UserInfo>
                <Avatar>
                  <img src={logo} alt="profile" />
                </Avatar>
                <Info>
                  <User>
                    <Name>{user[0].name}</Name>
                    <Member>
                      {user[0].premium ? "Premium" : "Free User"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill={user[0].premium ? "lightgreen" : "grey"}
                        className="bi bi-x-diamond-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z" />
                      </svg>
                    </Member>
                  </User>
                  <Setting>
                    <button
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pen"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                      </svg>
                      Edit Profile
                    </button>
                  </Setting>
                </Info>
                <Stat>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="grey"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                      />
                    </svg>
                    {user[0].email}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="lightgreen"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="grey"
                      className="bi bi-terminal"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                      <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
                    </svg>
                    {user[0].organisation}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="lightgreen"
                      className="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </li>
                </Stat>
              </UserInfo>
              <UserInfo>
                <h3>Redeem Voucher</h3>
                <input />
                <button>Submit</button>
              </UserInfo>
              {open && (
                <EditProfile>
                  <h3>Display Name</h3>
                  <input value={user.name} maxLength="20" />
                  <h3>Profile Picture</h3>
                  <input name="file" type="file" accept="image/*" />
                  <h3>Organisation</h3>
                  <input value={user.organisation} disabled />
                  <h3>Email</h3>
                  <input maxLength="30" />
                  <button onClick={async (e) => {}}>Submit</button>
                </EditProfile>
              )}
            </BasicInformation>
          )}
        </SubContainer>
      </Wrapper>
    </Container>
  );
}
