import React, { useCallback } from "react";
import Portal from "../Portal";
import UploadService from "../../service/UploadService";
import styled from "styled-components";

const PortalBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadModalBlock = styled.div`
  width: 40vw;
  height: 30vh;
  background: #222;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default function UploadModal({ type, offModal }) {
  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const _file_data = e.currentTarget.querySelector("#file").files[0];
    // axios post anbd
    // validate file
    const formData = new FormData();
    formData.append("file", _file_data);

    try {
      const result = await UploadService.uploadImage(formData);
      // setProfileImg(filePath);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <Portal>
      <PortalBlock className="modal-container" onClick={offModal}>
        <UploadModalBlock>
          <h1>{type}업로드하기</h1>
          <hr />
          <form onSubmit={onSubmit}>
            <input
              type="file"
              id="file"
              className="custom-thumbnail-input"

              // accept="image/jpeg, image/png, image/jpg, image/webp"
            />
            <button type="submit">올리기</button>
          </form>
        </UploadModalBlock>
      </PortalBlock>
    </Portal>
  );
}
