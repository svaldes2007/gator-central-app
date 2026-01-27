import React, { useEffect, useState } from "react";
//these imports are for saving the block data after closing/restarting the app, data stays on one device, unencrypted but I don't really think that matters
import { Platform, TextInput } from "react-native";
import Storage from "./storage";

function PersistentInput({ storageKey, placeholder, style = {} }) {
    const [text, setText] = useState("");

    //load saved text from user when component is called/run
    useEffect(() => {
        const loadData = async () => {
            const saved = await Storage.getItem(storageKey);
            if (saved !== null) {
                setText(saved);
            }
        };
        loadData();
    }, [storageKey]);

    //if text changes, save it
    const handleChange = async (value) => {
        setText(value);
        await Storage.setItem(storageKey, value);
    };

    //web version
    if (Platform.OS === "web") {
        return (
            <input
                type="text"
                value={text}
                placeholder={placeholder}
                onChange={(e) => handleChange(e.target.value)}
                style={{
                    padding: 8,
                    borderRadius: 8,
                    border: "1px solid #ccc",
                    width: "100%",
                    maxWidth: 300,
                    ...style,
                }}
            />
        );
    }
    
    //mobile version
    return (
        <TextInput
            value={text}
            placeholder={placeholder}
            onChangeText={handleChange}
            style={{
                padding: 8,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#ccc",
                width: "100%",
                ...style,
            }}
        />
    );
}

export default PersistentInput;


