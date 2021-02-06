import './Settings.css';
import React, { useState } from 'react';
import _ from 'underscore';
import { ethers } from 'ethers';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import QRCode from 'react-qr-code';


const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            text: {
                background: '#73ffbe',
            },
        },
    },
});

// props.onDone, props.address, props.balance, props.mnemonic
export const Settings = (props) => {
    const [toastOpen, setToastOpen] = useState(false);

    const onTopup = () => {
        window.open(`https://faucet.dimensions.network/`, '_blank');
        props.onDone();
    }

    const copyAddressToClipboard = () => {
        navigator.clipboard.writeText(props.address).then(() => {
            setToastOpen(true);
        });
    }

    const onToastClose = () => {
        setToastOpen(false);
    }

    const qrCodeValue = `ethereum:${props.address}`;

    return (
        <div className="Settings">
            <div className="ui">
                <div className="mainTitle">
                </div>
                <div className="mainMenu">
                    <div className="qr">
                        <QRCode value={qrCodeValue} size={128}/>
                    </div>
                    <div className="info" onClick={copyAddressToClipboard}>
                        <div className="network">
                            Network: Ethereum Ropsten (Testnet)
                        </div>
                        <div className="address">
                            Address: <span className="guid">{props.address}</span>
                        </div>
                        <div className="balance">
                            Balance: Ξ{props.balance}
                        </div>
                        <div className="mnemonic">
                            Mnemonic: <span className="mnemonic-content">{props.mnemonic}</span>
                        </div>
                    </div>
                </div>
                <div className="uiElement cancelBox bottomBox" onClick={props.onCancel}>
                    BACK
                </div>
                <div className="uiElement doneBox bottomBox" onClick={onTopup}>
                    TOP UP
                </div>
            </div>
            <ThemeProvider theme={theme}>
                <Snackbar open={toastOpen} autoHideDuration={3000} onClose={onToastClose}>
                    <Alert onClose={onToastClose} severity="success">
                        Address copied to clipboard.
                    </Alert>
                </Snackbar>
            </ThemeProvider>
        </div>
    );
};