import React, { useState } from "react";


const ProjectRow = ({ signInFlightEventsFor, handleSignIn }) => {

        const fakeData= [{
        id: 1,
        projectName: "A",
        contractor: "contractA",
    }, {
        id: 2,
        projectName: "B",
        contractor: "contractB",
    },
            {
                id: 3,
                projectName: "C",
                contractor: "C",
            },
            {
                id: 4,
                projectName: "D",
                contractor: "D",
            },


        ]




        // return (
        //     <Table.Row data-testid="flight-sign-in-row">
        //         <Table.Cell>
        //             <AircrewDropdown dataTestId="FCP" onAircrewSelected={onFCPSelected} aircrew={fcp ? fcp.alias : null} />
        //         </Table.Cell>
        //         <Table.Cell>
        //             <AircrewDropdown dataTestId="RCP" onAircrewSelected={onRCPSelected} aircrew={rcp ? rcp.alias : null} />
        //         </Table.Cell>
        //         <Table.Cell colSpan="4" />
        //         <Table.Cell textAlign="center">
        //             <Button
        //                 primary
        //                 color="blue"
        //                 className="table__button"
        //                 disabled={signInDisabled}
        //                 data-testid="flight-sign-in-button"
        //                 onClick={onSignInClick}
        //             >
        //                 Sign In
        //             </Button>
        //         </Table.Cell>
        //     </Table.Row>
        // );
    };


export default ProjectRow;

//connect(null, mapDispatchToProps)(ProjectRowComponent);
