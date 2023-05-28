import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,

  SimpleGrid,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Api_Link, succesAlert } from "./Reusable";
import ButtonMain from "./ButtonMain";
export const EditModal = ({ editModalOpen, setEditModalOpen, id,callData }) => {
  const [loading, setLoading] = useState(false);
  const [inventoryData, setInventoryData] = useState({});


  //this is edit modal open component  which is opened when when we click on parent edit modal open button with
  // and used to show input form to update the required values we want

  const handleUpdate = async (e) => {

    //this function is used to update the details of the post updated by user
    e.preventDefault();
    setLoading(true);
    try {
      let { data } = await axios.patch(
        `${Api_Link}/inventory/${id}`,
        inventoryData
      );
      succesAlert(data.msg);
      setLoading(false);
      callData()
      setEditModalOpen(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
      >
        <ModalOverlay backdropFilter={"blur(10px)"} />
        <ModalContent>
          <ModalHeader>Update Deal </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleUpdate}>
              <SimpleGrid gap={2}>
                <Input
                  type="text"
                  onChange={(e) =>
                    setInventoryData({
                      ...inventoryData,
                      title: e.target.value,
                    })
                  }
                  placeholder="Update Title"
                />
                <Input
                  type="number"
                  onChange={(e) =>
                    setInventoryData({ ...inventoryData, km: e.target.value })
                  }
                  placeholder="Update KMs on Odometer"
                />

                <Select
                  onChange={(e) =>
                    setInventoryData({
                      ...inventoryData,
                      majorScratches: e.target.value,
                    })
                  }
                  placeholder="Update Major Scratches"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>

                <Input
                  type="number"
                  onChange={(e) =>
                    setInventoryData({
                      ...inventoryData,
                      price: e.target.value,
                    })
                  }
                  placeholder="Update Price"
                />

                <Input
                  type="text"
                  onChange={(e) =>
                    setInventoryData({
                      ...inventoryData,
                      orginalPaint: e.target.value,
                    })
                  }
                  placeholder="Update Original Paint"
                />
                <Input
                  type="number"
                  onChange={(e) =>
                    setInventoryData({
                      ...inventoryData,
                      accidents: e.target.value,
                    })
                  }
                  placeholder="Number of accidents reported"
                />
                <Input
                  type="number"
                  onChange={(e) =>
                    setInventoryData({
                      ...inventoryData,
                      prevBuyers: e.target.value,
                    })
                  }
                  placeholder="Update Number of previous buyers"
                />

                <Input
                  type="text"
                  onChange={(e) =>
                    setInventoryData({
                      ...inventoryData,
                      registrationPlace: e.target.value,
                    })
                  }
                  placeholder="Update Registration Place"
                />
                <ButtonMain
                  loading={loading}
                  type={"submit"}
                  title={"Update Deal"}
                />
              </SimpleGrid>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setEditModalOpen(false)}
            >
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
