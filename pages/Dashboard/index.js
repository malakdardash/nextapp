import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import FormatLineSpacingOutlinedIcon from "@mui/icons-material/FormatLineSpacingOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactsIcon from "@mui/icons-material/Contacts";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ArticleIcon from "@mui/icons-material/Article";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import MTextInput from "@/shared/components/inputs/m-text-input";
export default function Dashboard() {
  const [David_Greymaax, setDavid_Greymaax] = React.useState("");

  const handleChange = (event) => {
    setDavid_Greymaax(event.target.value);
  };
  return (
    <div>
      <div className="Row pt-3 d-flex pe-4">
        <div className="col-2 justify-content-center d-flex color-Purple ">
          <div className="pe-2">
            <LayersOutlinedIcon />
          </div>
          <div>
            <h3>Purple</h3>
          </div>
        </div>
        <div className="col d-flex">
          <div className="pt-2 pe-1">
            <DehazeOutlinedIcon />
          </div>
          <div>
            <div class="d-flex ps-4 pt-1">
              <div className="pt-1">
                <SearchOutlinedIcon />
              </div>
              <div>
                <MTextInput
                  type="text"
                  placeholder="Search Project"
                  name="search"
                />
              </div>
            </div>
          </div>

          <div className="col justify-content-end text-end align-self-end d-flex">
            <div className="pt-2">
              <AccountCircleOutlinedIcon />
            </div>
            <div>
              <Box sx={{ minWidth: 170 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    David Greymaax
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={David_Greymaax}
                    label="David_Greymaax"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="ps-5 pt-2">
              <MailOutlineOutlinedIcon />
            </div>
            <div className="ps-5 pt-2">
              <NotificationsNoneOutlinedIcon />
            </div>
            <div className="ps-5 pt-2">
              <PowerSettingsNewOutlinedIcon />
            </div>
            <div className="ps-5 pt-2">
              <FormatLineSpacingOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="row vh-100">
        <div className="col-2 pe-4">
          <div className=" ps-4 d-flex color-Purple">
            <div className="flex-grow-1">
              <p>Dashboard</p>
            </div>
            <div>
              <HomeIcon />
            </div>
          </div>

          <div className=" ps-4 d-flex pt-3">
            <div className="flex-grow-1">
              <p>Basic UI Elements</p>
            </div>
            <div>
              <GpsFixedIcon />
            </div>
          </div>
          <div className=" ps-4 d-flex pt-3">
            <div className="flex-grow-1">
              <p>Form Elements</p>
            </div>
            <div>
              <FormatListBulletedIcon />
            </div>
          </div>

          <div className=" ps-4 d-flex pt-3">
            <div className="flex-grow-1">
              <p>Tables</p>
            </div>
            <div>
              <CalendarMonthIcon />
            </div>
          </div>

          <div className=" ps-4 d-flex pt-3">
            <div className="flex-grow-1">
              <p>Icons</p>
            </div>
            <div>
              <ContactsIcon />
            </div>
          </div>
          <div className=" ps-4 d-flex pt-3">
            <div className="flex-grow-1">
              <p>Charts</p>
            </div>
            <div>
              <BarChartOutlinedIcon />
            </div>
          </div>
          <div className=" ps-4 d-flex pt-3">
            <div className="flex-grow-1">
              <p>User Page</p>
            </div>
            <div>
              <LockIcon />
            </div>
          </div>
          <div className=" ps-4 d-flex pt-3">
            <div className="flex-grow-1">
              <p>Error Page</p>
            </div>
            <div>
              <SecurityIcon />
            </div>
          </div>
          <div className=" ps-4 d-flex pt-3">
            <div className="flex-grow-1">
              <p>General Page</p>
            </div>
            <div>
              <MedicalServicesIcon />
            </div>
          </div>
          <div className=" ps-4 d-flex pt-3">
            <div className="flex-grow-1">
              <p>Documentation</p>
            </div>
            <div>
              <ArticleIcon />
            </div>
          </div>
        </div>

        <div className="col body1 pe-4">
          <div className="d-flex pt-5 ps-5">
            <div className="p-2 dashboardIcon rounded">
              <HomeIcon className="text-white" />
            </div>
            <div className="flex-grow-1 align-self-center px-2">
              <h5>Dashboard</h5>
            </div>
            <div className="align-self-center">
              <p>Overview</p>
            </div>
            <div className="color-Purple pe-3">
              <InfoOutlinedIcon />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col ps-5 pt-4">
              <div class="card border-0 text-white p-4 card1">
                <div class="card-body">
                  <p>Weekly Sales</p>
                  <h5 class="card-title pb-4">$ 15,0000</h5>
                  <p class="card-text">Increased by 60%</p>
                </div>
              </div>
            </div>

            <div className="col pt-4">
              <div class="card border-0 text-white p-4 card2">
                <div class="card-body">
                  <p>Weekly Orders</p>
                  <h5 class="card-title pb-4">45,6334</h5>
                  <p class="card-text">Decreased by 10%</p>
                </div>
              </div>
            </div>

            <div className="col pt-4">
              <div class="card border-0 text-white p-4 card3">
                <div class="card-body">
                  <p>vistors Online</p>
                  <h4 class="card-title pb-4">95,5741</h4>
                  <p class="card-text">Incrased by 5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
