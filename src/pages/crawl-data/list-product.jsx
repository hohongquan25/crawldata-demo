import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  IconButton,
  Input,
  Stack,
  Tooltip,
  Typography,
  Modal,
  Sheet,
  ModalClose
} from '@mui/joy';
import { CardMedia, ImageList, ImageListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

export default function ListProductReview({
  detailProduct,
  currentImages,
  setCurrentImages,
  title,
  setTitle
}) {
  const [openModal, setOpenModal] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState('');

  useEffect(() => {
    if (detailProduct.length > 0) {
      const allImages = detailProduct.flatMap((item) => item.images || []);
      setCurrentImages(allImages);
      if (detailProduct[0]?.title) {
        setTitle(detailProduct[0].title);
      }
    }
  }, [detailProduct]);

  const handleOpenModal = (images) => {
    setCurrentImages(images);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentImages([]);
  };

  const handleAddImage = () => {
    if (newImageUrl.trim() !== '') {
      setCurrentImages([...currentImages, { url: newImageUrl }]);
      setNewImageUrl('');
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...currentImages];
    updatedImages.splice(index, 1);
    setCurrentImages(updatedImages);
  };

  return (
    <FormControl>
      {detailProduct.map((item, index) => (
        <Stack paddingTop={2} key={index}>
          <Card variant="outlined" sx={{ width: 250, p: 0, borderRadius: 10 }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="140"
                image={item.images?.[0]?.url}
                alt="Meowdy Partner Cowboy Cat Shirt Cute"
                sx={{ borderRadius: '8px 8px 0 0' }} // Border radius for top corners
              />
              <IconButton
                aria-label="add to favorites"
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  backgroundColor: 'none',
                  borderRadius: '50%'
                }}
              >
                <Checkbox color="success" variant="soft" />
              </IconButton>
              <IconButton
                aria-label="delete"
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'white',
                  borderRadius: '50%'
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 4,
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  <Tooltip title="có ảnh xem không" variant="plain">
                    <Button
                      variant="plain"
                      sx={{ outline: 'none' }}
                      onClick={() => handleOpenModal(item.images)}
                    >
                      {item.images?.length}
                    </Button>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
            <CardContent sx={{ p: 1 }}>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                fontSize={13}
                fontWeight={600}
              >
                {title || item.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 1
                }}
              >
                <Input defaultValue="1" sx={{ width: 50, mr: 1 }} />
                <Typography variant="body2" color="textPrimary">
                  ${item.price}
                </Typography>
              </Box>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mt: 1, width: '100%' }}
              />
            </CardContent>
          </Card>
        </Stack>
      ))}

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 600,
            maxHeight: 600, // Limit the height of the modal
            overflowY: 'auto', // Enable vertical scrolling
            borderRadius: 'md',
            width: 600,
            p: 3,
            boxShadow: 'lg'
          }}
        >
          <ModalClose variant="plain" onClick={handleCloseModal} />
          <Typography
            component="h2"
            level="h5"
            fontWeight="lg"
            textColor="inherit"
            mb={1}
          >
            Danh sách hình ảnh
          </Typography>
          <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={100}>
            {currentImages.map((image, index) => (
              <ImageListItem key={index} sx={{ position: 'relative' }}>
                <img
                  srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
                  alt={`Image ${index + 1}`}
                  loading="lazy"
                />
                <IconButton
                  aria-label="remove"
                  onClick={() => handleRemoveImage(index)}
                  sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    backgroundColor: 'none'
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </ImageListItem>
            ))}
          </ImageList>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
            <Input
              placeholder="New Image URL"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              fullWidth
            />
            <Button
              variant="outlined"
              color="success"
              size="small"
              onClick={handleAddImage}
            >
              Add
            </Button>
          </Box>
        </Sheet>
      </Modal>
    </FormControl>
  );
}
